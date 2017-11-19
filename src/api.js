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

    client_id: 'babfff58827742c2acc76f69227b9889',          // Client ID from Instagram
    redirect_uri: 'https://raffleroll.firebaseapp.com/',

    /** (PUBLIC) Build and return Instagram's OAuth URL
    */
    get_oauth_url() {
        let service = this;
        return `https://api.instagram.com/oauth/authorize?client_id=${service.client_id}&redirect_uri=${service.redirect_uri}&response_type=token`
    },

    /** (PUBLIC) GET the media_id and total comment count
     * @param { String } access_token       OAuth token given after auth
     * @param { String } shortcode          unique shortcode identifier found in a media url  
    */
    get_media_data: (access_token, shortcode) =>
        request.get(`/media/shortcode/${shortcode}`),

<<<<<<< dcd2fb46366e1fba96d467900e8e8d098eba3143
    /** (PUBLIC) GET a page of comments
     * @param { String } access_token       OAuth token given after auth
     * @param { String } media_id           unique identifier for the media object
    */
    get_comments: (access_token, media_id) =>
        request.get(`/media/${media_id}/comments`),
    
    /** (PUBLIC) GET the relationship between the oauth user and user_id
     * @param { String } access_token       OAuth token given after auth
     * @param { String } user_id            unique identifier for the desired user to check against
    */
    get_relationship: (acess_token, user_id) =>
        request.get(`/user/${user_id}/relationship`)
=======

        // (REQUEST) Get total number of comments

            // Get request.data.id = media_id
       
            // Generate random number for comment page

            // (REQUEST) Get a specific comment page

                // Select a random comment

                // (REQUEST) - get information on that user for display + follow back param

        // TODO: try and reduce request count from 3
    },
>>>>>>> firebase

}