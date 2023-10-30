module.exports = {
    formatDate: (date) => {
        return `${date.toLocaleTimeString()} ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    },
};