import axios from 'axios';

const request = axios.create({
    baseURL: 'https://api.instagram.com/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
});

export const INSTA_API = {
    // Instagram API Service

    client_id: 'babfff58827742c2acc76f69227b9889',      // Client ID from Instagram
    redirect_uri: 'https://test.com',                   // Will probably need NGROK for this

    /** (PUBLIC) Build and return Instagram's OAuth URL
    */
    get_oauth_url() {
        let service = this;
        return `https://api.instagram.com/oauth/authorize?client_id=${service.client_id}&redirect_uri=${service.redirect_uri}&response_type=token`
    },

    /** (PUBLIC) GET a random comment from a media object
     * @param { String } access_token       OAuth token given after auth
     * @param { String } media_id           unique identifier for the media object 
    */
    get_random_comment(access_token, media_id) {

        // (REQUEST) Get total number of comments
       
            // Generate random number for comment page

            // (REQUEST) Get a specific comment page

                // Select a random comment

                // (REQUEST) - get information on that user for display + follow back param

        // TODO: try and reduce request count from 3
    },

}