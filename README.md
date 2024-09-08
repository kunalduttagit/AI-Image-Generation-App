# AI Image Generation App

Amongsts many small projects that I created during my junior year, AI Image Generation Application was one of the most unique projects that _integrated_ **Development**, **Machine Learning**, using OPEN AI API as well as converting and uploading response images to **Cloudinary**. This was fun and functional. But now the current functionality of this app is limited due to a pay wall.

Anyways, if you want to run this app with your own follow the below steps on your local machine.

---

1. Clone this project
```bash
git clone https://github.com/kunalduttagit/AI-Image-Generation-App.git <your-name-for-app>
```

2. Move into the root of the project directory:
```bash
cd <your-name-for-app>
```

3. Create a `.env` file in the server folder
```bash
cd server && touch .env
```

4. In the `.env` folder paste this following lines of code with your credentials

``` sh
OPENAI_API_KEY = <YOUR-OPENAI-API-KEY>
MONGODB_URL = <YOUR-MONGODB-ATLAS-URI>

CLOUDINARY_CLOUD_NAME = <YOUR-CLOUDINARY-CLOUD-NAME>
CLOUDINARY_API_KEY = <YOUR-CLOUDINARY-API-KEY>
CLOUDINARY_API_SECRET = <YOUR-CLOUDINARY-API-SECRET>
```

5. Move back to the root directory:
```sh
cd ..
```

6. Open two terminals and install dependencies<br/> <br/>
    - In the first terminal, run the server:
    ```bash
    cd server && npm i && npm run start
    ```
    - In the second terminal, run the React app:
    ```bash
    cd client && npm i && npm run start
    ```

---
This should be enough to run a functional React app. If you encounter any problems, contact me at kunalduttaedu@gmail.com.