# NEWS API 

## Description
A backend system that delivers news from different countries. Users can choose their preferred country for headlines. It retrieves news from the newsapi.org API.

## Setup the project

- Download project from github and open it in your favourite code editor.

### Requirements

- Node.js (v12 or higher)

### backend

- Go inside the backend folder and execute the following command:

```
npm install
```

- In the root directory create a `.env` file and add the following env variables
  example:
  ```
    PORT=3000
    NEWS_URL='https://newsapi.org/v2/everything'
    TOP_HEADLINES_URL='https://newsapi.org/v2/top-headlines'
    SOURCES='https://newsapi.org/v2/top-headlines/sources'

  ```

- To run the server execute

```
npm start
```

### Folder Structure

`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests.

Lets take a look inside the `src` folder

 - `config` -> In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here. 

 - `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it. 

 - `middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc. 

 - `controllers` -> they are kind of the last middlewares as post them you call you business layer to execute the budiness logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output. 

 - `services` -> contains the buiness logic and interacts with repositories for data from the database

 - `utils` -> contains helper methods, error classes etc.

 ### Api End Points

 - `localhost:3000/api/v1/news/everything` -> Search through millions of articles from over 80000 large and small news sources and blogs.

 - To access the API, you need to include the API key in the request headers:
  ```
    X-Api-Key: Get your api key from https://newsapi.org
    
  ```
- Query Parameters
  ```
    q:love
    language:en
    from:2024-03-25
    to:2024-03-26
    sortBy:relevance
  
  ```
- Success Response
  ```
  {
    "success": true,
    "msg": "Successfully completed the request",
    "data": {
        "status": "ok",
        "totalResults": 1,
        "articles": [
            {
                "source": {
                    "id": null,
                    "name": "Cool Hunting"
                },
                "author": "Josh Rubin",
                "title": "Scott Campbell Launches “Stupid Things for Love” Podcast",
                "description": "A new interview series celebrates the time spent together while getting tattooed Scott Campbell, renowned fine artist and tattooist with a career spanning over two decades, has launched a new podcast titled …",
                "url": "http://coolhunting.com/culture/scott-campbell-launches-stupid-things-for-love-podcast/",
                "urlToImage": "https://150102931.v2.pressablecdn.com/wp-content/uploads/2024/03/B663871F-FC38-43CA-B483-01DD56914F66.jpeg",
                "publishedAt": "2024-03-25T02:05:32Z",
                "content": "A new interview series celebrates the time spent together while getting tattooed\n\n\nRead\nCulture\r\n\n\n\n\n\nScott Campbell Launches “Stupid Things for Love” Podcast\r\n\n\n\nA new interview series celebrates th… [+3154 chars]"
            }
        ]
    },
    "error": {}
  }

  ```
- Error Response
  ```
  {
    "success": false,
    "msg": "Something went wrong",
    "data": {},
    "error": {
        "statusCode": 400,
        "explanation": "Required parameters are missing, the scope of your search is too broad. Please set any of the following required parameters and try again: q, qInTitle, sources, domains."
    }
  }
  
  ```

 - `localhost:3000/api/v1/news/top-headlines` -> This endpoint provides live top and breaking headlines for a country, specific category in a country, single source, or multiple sources. You can also search with keywords. Articles are sorted by the earliest date published first.

 - To access the API, you need to include the API key in the request headers:
  ```
    X-Api-Key: Get your api key from https://newsapi.org
    
  ```
- Query Parameters
  ```
    country:in
    category:sports
    language:en
  
  ```
- Success Response
  ```
  {
    "success": true,
    "msg": "Successfully completed the request",
    "data": {
        "status": "ok",
        "totalResults": 1,
        articles": [
            {
                "source": {
                    "id": null,
                    "name": "Crictracker.com"
                },
                "author": "Ahsan Jami",
                "title": "IPL 2024: Match 7, CSK vs GT Match Prediction – Who will win today’s IPL match between CSK vs GT? - CricTracker",
                "description": "PreviewOn Tuesday evening at Chepauk in Chennai, we are set to witness a rematch of last year’s IPL final as the 2023 champions, Chennai Super Kings (CSK), face off against the 2022 winners and 2023 r",
                "url": "https://www.crictracker.com/cricket-match-predictions/ipl-2024-match-7-csk-vs-gt-match-prediction-who-will-win-todays-ipl-match-between-csk-vs-gt/",
                "urlToImage": "https://media.crictracker.com/media/attachments/1711362697418_Jadeja-and-Miller.jpeg",
                "publishedAt": "2024-03-25T15:30:00Z",
                "content": "Preview\r\nOn Tuesday evening at Chepaukin Chennai, we are set to witness a rematch of last years IPL final as the 2023 champions, Chennai Super Kings (CSK), face off against the 2022 winners and 2023 … [+3815 chars]"
            }
        ]
    },
    "error": {}
  }

  ```
- Error Response
  ```
  {
    "success": false,
    "msg": "Something went wrong",
    "data": {},
    "error": {
        "statusCode": 400,
        "explanation": "Required parameters are missing, the scope of your search is too broad. Please set any of the following required parameters and try again: q, qInTitle, sources, domains."
    }
  }
  
  ```

 - `localhost:3000/api/v1/news/top-headlines/sources` -> t's mainly a convenience endpoint that you can use to keep track of the publishers available on the API, and you can pipe it straight through to your users.

 - To access the API, you need to include the API key in the request headers:
  ```
    X-Api-Key: Get your api key from https://newsapi.org
    
  ```
- Query Parameters
  ```
    country:in
    category:sports
    language:en
  
  ```
- Success Response
  ```
  {
    "success": true,
    "msg": "Successfully completed the request",
    "data": {
        "status": "ok",
        "sources": [
            {
                "id": "bleacher-report",
                "name": "Bleacher Report",
                "description": "Sports journalists and bloggers covering NFL, MLB, NBA, NHL, MMA, college football and basketball, NASCAR, fantasy sports and more. News, photos, mock drafts, game scores, player profiles and more!",
                "url": "http://www.bleacherreport.com",
                "category": "sports",
                "language": "en",
                "country": "us"
            },
        ]
    },
    "error": {}
  }

  ```
- Error Response
  ```
  {
    "success": false,
    "msg": "Something went wrong",
    "data": {},
    "error": {
        "statusCode": 400,
        "explanation": "Required parameters are missing, the scope of your search is too broad. Please set any of the following required parameters and try again: q, qInTitle, sources, domains."
    }
  }
  
  ```

 





