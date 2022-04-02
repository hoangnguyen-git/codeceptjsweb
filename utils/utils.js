module.exports = {

    /**
     * Get timestamp
     * @returns {Promise<number>}
     */
    getDateTimeStamp() {
        return Math.floor(Date.now() / 1000);
    },

    getKeycodeAndroid() {
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        let keycode_number_start = 7;
        let keycode_start_alphabet = 29;

        let keycode_list = {};
        let alphabet_arr = alphabet.split("");
        for (let i=0; i<alphabet_arr.length; i++) {
            keycode_list[alphabet_arr[`${i}`]] = keycode_start_alphabet;
            keycode_start_alphabet ++;
        }

        for (let j=0; j<=9; j++) {
            keycode_list[j] = keycode_number_start;
            keycode_number_start++;

        }
        keycode_list['.'] = 190;
        keycode_list['@'] = 77;
        keycode_list['_'] = 156;

        return keycode_list;
    }
};