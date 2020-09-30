export const ReportAPI = superclass =>
    class extends superclass {
        async getReport(name, order) {
            const url = this.baseUrl + `reports/${name}`;
            const options = { body: order };
            const reportHtml = await this.post(url, options);
            return reportHtml;
        }
    };

export default ReportAPI;
