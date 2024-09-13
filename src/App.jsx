import axios from 'axios'
import './App.css'

function App() {
  const url =
    'https://cors-anywhere.herokuapp.com/https://afanasyevkirill97.amocrm.ru/api/v4/leads'
  // const url = '/api/v4/leads'
  const code =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM2MDA0ZjU5NDE1N2Y3ZjRkZDJkZDM4MTI4NzU1ZmI0NDBlMWYyMjg4YWVkNTg0ZTg3OGE2ZTZkYWIwYWM4YzA4MmQ2MTBlYzg4ZTk4OWUwIn0.eyJhdWQiOiIyZDQxOGNhZi0xZDhmLTRmOGQtYWE4ZC0zMTJkZjJlM2ZlMmYiLCJqdGkiOiIzNjAwNGY1OTQxNTdmN2Y0ZGQyZGQzODEyODc1NWZiNDQwZTFmMjI4OGFlZDU4NGU4NzhhNmU2ZGFiMGFjOGMwODJkNjEwZWM4OGU5ODllMCIsImlhdCI6MTcyNjIwNTU1OSwibmJmIjoxNzI2MjA1NTU5LCJleHAiOjE3MjgwMDAwMDAsInN1YiI6IjExNTA5NTI2IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxOTQ2Njk0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiZDA0NjRjY2EtOGEyZS00MjlhLTljNmItODhjYjZhOWJlYzYyIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.VcSQfF2OVMiaP1dacqS9e5wy_r2pN7iqeQA_AsyjvVU7bmPNFjP-KFFKdEQR_Dlhah1y2YFpFuHwNhNzuOSAd1kHgABFIXTFI-jgLXSEEGPK2pWlPHziLFRjJ_-JQ-QkkaYmpTa4G_x2b-7-OXQGyLhZVVrnZIetuFsZgrRzlYe--IP0oDv-FuyXnjsTznlHx6G004TJP_eDPhWJXbnaGE85iE3hxv1s3fypaP8UiAu0lzuog8GnqgeqsgE4ekxrPRwNSsABZNhnSDfJpKVNf84hx0vrvxKKixO2ewIpERTBj0S7IdRCD9AWAeqZp9Jpm1yjhHecLN29O9s8PTDKzA'

  const getLeads = async () => {
    const headers = {
      Authorization: `Bearer ${code}`,
      'Content-Type': 'application/json',
    }
    try {
      const response = axios.get(url, { headers })
      console.log('1111', response)
    } catch (error) {
      console.log('2222', error)
    }
  }
  getLeads()
  return <div>Hello</div>
}

export default App

// function App() {
//   const redirectUrl = 'http://localhost:5173/'
//   const url = 'https://afanasyevkirill97.amocrm.ru/oauth2/access_token'
//   const secretKey =
//     '9cRFi4TcRJoBnmVHYcNQ846tAnWP0M4ygw6NuKFuDFZ4VfqBrLVT0R7Tf55R49Wt'
//   const idIntegration = '2d418caf-1d8f-4f8d-aa8d-312df2e3fe2f'
//   const code =
//     'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM2MDA0ZjU5NDE1N2Y3ZjRkZDJkZDM4MTI4NzU1ZmI0NDBlMWYyMjg4YWVkNTg0ZTg3OGE2ZTZkYWIwYWM4YzA4MmQ2MTBlYzg4ZTk4OWUwIn0.eyJhdWQiOiIyZDQxOGNhZi0xZDhmLTRmOGQtYWE4ZC0zMTJkZjJlM2ZlMmYiLCJqdGkiOiIzNjAwNGY1OTQxNTdmN2Y0ZGQyZGQzODEyODc1NWZiNDQwZTFmMjI4OGFlZDU4NGU4NzhhNmU2ZGFiMGFjOGMwODJkNjEwZWM4OGU5ODllMCIsImlhdCI6MTcyNjIwNTU1OSwibmJmIjoxNzI2MjA1NTU5LCJleHAiOjE3MjgwMDAwMDAsInN1YiI6IjExNTA5NTI2IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxOTQ2Njk0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiZDA0NjRjY2EtOGEyZS00MjlhLTljNmItODhjYjZhOWJlYzYyIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.VcSQfF2OVMiaP1dacqS9e5wy_r2pN7iqeQA_AsyjvVU7bmPNFjP-KFFKdEQR_Dlhah1y2YFpFuHwNhNzuOSAd1kHgABFIXTFI-jgLXSEEGPK2pWlPHziLFRjJ_-JQ-QkkaYmpTa4G_x2b-7-OXQGyLhZVVrnZIetuFsZgrRzlYe--IP0oDv-FuyXnjsTznlHx6G004TJP_eDPhWJXbnaGE85iE3hxv1s3fypaP8UiAu0lzuog8GnqgeqsgE4ekxrPRwNSsABZNhnSDfJpKVNf84hx0vrvxKKixO2ewIpERTBj0S7IdRCD9AWAeqZp9Jpm1yjhHecLN29O9s8PTDKzA'

//   const getLeads = async () => {
//     try {
//       const response = await axios.post(url, {
//         client_id: idIntegration,
//         client_secret: secretKey,
//         grant_type: 'authorization_code',
//         code,
//         redirect_uri: redirectUrl,
//       })

//       console.log('1111', response)
//     } catch (error) {
//       console.log('2222', error)
//     }
//   }
//   getLeads()
//   return <div>Hello</div>
// }
