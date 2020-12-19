module.exports = {
    getTime: () => {
        try {
            let ts = Date.now();
            let res = {
                timestamp: ts
            }

            return res;
        } catch (error) {
            throw error;
        }
    },
}