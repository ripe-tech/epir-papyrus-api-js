export const ReportAPI = superclass =>
    class extends superclass {
        async getReport(name, order) {
            const url = this.baseUrl + `reports/${name}`;
            const options = { body: order };
            const contents = await this.post(url, options);
            const reportHtml = await contents.text();
            return reportHtml;
        }
    };

export default ReportAPI;
