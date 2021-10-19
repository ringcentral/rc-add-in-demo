require('dotenv').config();
const axios = require('axios')
const {
  TEST_URL
} = process.env

async function run () {
  const r = await axios.post(
    TEST_URL,
    {
      title: 'This is from third party'
    }
  )
  console.log(r.data)
}

run()
