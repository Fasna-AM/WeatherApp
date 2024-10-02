import axios from "axios";


const CommonAPI = async(httpMethod,url,reqstBody)=>{
    const requestConfig = {
      method : httpMethod,
      url,
      data : reqstBody
    }
    return await axios(requestConfig).then((response)=>{
      // console.log(response);

      return response
      
    }).catch((err)=>{
      return err
    })

  }

export default CommonAPI