const { sheets, SPREADSHEET_ID, SHEET_NAME } = require('../services/googleSheetService');

exports.feedback = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const timestamp = new Date().toLocaleString();

        // Check if headers exist
        const existing = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: `${SHEET_NAME}!A1:D1`,
        });

        // If no headers, add them first and make them bold
        if (!existing.data.values || existing.data.values.length === 0) {
            // Add headers
            await sheets.spreadsheets.values.append({
                spreadsheetId: SPREADSHEET_ID,
                range: `${SHEET_NAME}!A1:D1`,
                valueInputOption: 'USER_ENTERED',
                resource: {
                    values: [['Timestamp', 'Name', 'Email', 'Message']]
                },
            });

            // Make headers bold
            await sheets.spreadsheets.batchUpdate({
                spreadsheetId: SPREADSHEET_ID,
                resource: {
                    requests: [{
                        repeatCell: {
                            range: {
                                sheetId: 0,
                                startRowIndex: 0,
                                endRowIndex: 1,
                                startColumnIndex: 0,
                                endColumnIndex: 4
                            },
                            cell: {
                                userEnteredFormat: {
                                    textFormat: {
                                        bold: true
                                    }
                                }
                            },
                            fields: 'userEnteredFormat.textFormat.bold'
                        }
                    }]
                }
            });
        }

        // Append the actual data
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: `${SHEET_NAME}!A:D`,
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [[timestamp, name, email, message]],
            },
        });
        
        if (response.status === 200) {
            res.status(200).json({ message: 'Message sent successfully!' });
        } else {
            throw new Error('Failed to update spreadsheet');
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
};
