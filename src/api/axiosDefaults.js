import axios from "axios";

axios.defaults.baseURL = "https://drf-api-profiles-6c9bc5cc1b09.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;