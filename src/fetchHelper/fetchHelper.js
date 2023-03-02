import axios from 'axios'


export const fetchMovie = async(str) =>{
//     fetch()
//         .then ((res) => res.json())
//         .then.((data)=> console.log(data);) 
//         .catch((error) => console.log(error);)



const {data} = await axios.get("https://www.omdbapi.com/?i=tt3896198&apikey=58453a56&t=" + str)

return data

}