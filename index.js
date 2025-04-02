const BASE_URL = 'http://localhost:8000'
let mode = 'CREATE'
let selectedId = ''

window.onload = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  console.log('id', id)
  if (id) {
    mode = 'EDIT'
    selectedId = id

    //1.เราจะดึกข้อมูล user ที่ต้องการแก้ไข
    try {
      const response = await axios.get(`${BASE_URL}/users/${id}`)
      const users = response.data

      //2. นำข้อมูล user ที่ดึกมา ใส่ใน input ที่เรามี
      let firstNameDOM = document.querySelector('input[name=firstname]');
      let lastNameDOM = document.querySelector('input[name=lastname]');
      let ageDOM = document.querySelector('input[name=age]');
      let descriptionDOM = document.querySelector('textarea[name=description]');

      firstNameDOM.value = users.firstname
      lastNameDOM.value = users.lastname
      ageDOM.value = users.age
      descriptionDOM.value = users.description


      let genderDOM = document.querySelectorAll('input[name=gender]')
      let interestDOMs = document.querySelectorAll('input[name=interests]')

      for (let i = 0; i < genderDOM.length; i++) {
        if (genderDOM[i].value == users.gender) {
          genderDOM[i].checked = true
        }
      }
        for (let i = 0; i < interestDOMs.length; i++) {
          if (users.interests.includes(interestDOMs[i].value)) {
            interestDOMs[i].checked = true
          }
        }

    } catch (error) {
      console.log('error', error)
    }
  }
}
const validateData = (userData) => {
  let errors = []
  if (!userData.firstName) {
    errors.push('กรุณากรอกชื่อ')
  }
  if (!userData.lastName) {
    errors.push('กรุณากรอกนามสกุล')
  }
  if (!userData.age) {
    errors.push('กรุณากรอกอายุ')
  }
  if (!userData.gender) {
    errors.push('กรุณาเลือกเพศ')
  }
  if (userData.interests.length === 0) {
    errors.push('กรุณาเลือกความสนใจ')
  }
  if (!userData.description) {
    errors.push('กรุณากรอกคำอธิบาย')
  }
  return errors
}

const submitData = async () => {
  let firstNameDOM = document.querySelector('input[name=firstname]');
  let lastNameDOM = document.querySelector('input[name=lastname]');
  let ageDOM = document.querySelector('input[name=age]');
  let genderDOM = document.querySelector('input[name=gender]:checked');
  let interestDOMs = document.querySelectorAll('input[name=interests]:checked');
  let descriptionDOM = document.querySelector('textarea[name=description]');

  let messageDOM = document.getElementById('message');
  
  try {
    let interest = Array.from(interestDOMs).map(i => i.value).join(',');

    let userData = {
      firstName: firstNameDOM.value,
      lastName: lastNameDOM.value,
      age: ageDOM.value,
      gender: genderDOM.value,
      description: descriptionDOM.value,
      interests: interest
    }
    console.log('submitData', userData);

    const errors = validateData(userData)
    if (errors.length > 0) {
      //มีerror
      throw {
        message: 'กรุณากรอกข้อมูลให้ครบถ้วน',
        errors: errors
      }
    }
    let message = 'บันทึกข้อมูลเรียบร้อยแล้ว'
    if (mode == 'CREATE') {
      const response = await axios.post(`${BASE_URL}/users`, userData)
      console.log('response', response.data);
    } else {
      const response = await axios.put(`${BASE_URL}/users/${selectedId}`, userData)
      message = 'แก้ไขข้อมูลเรียบร้อยแล้ว'
      console.log('response', response.data);
    }

    setTimeout(() => {
      window.location.href = 'user.html'
    }, 1000)
    messageDOM.innerText = message
    messageDOM.className = 'message success'
  } catch (error) {
    console.log('error message', error.message);
    console.log('error', error.errors);

    if (error.response) {
      error.message = error.response.data.message
      error.errors = error.response.data.errors
    }

    let htmlData = '<div>'
    htmlData += `<div> ${error.message} </div>`
    htmlData += '<ul>'
    for (let i = 0; i < error.errors.length; i++) {
      htmlData += `<li> ${error.errors[i]} </li>`
    }
    htmlData += '</ul>'
    htmlData += '</div>'

    messageDOM.innerHTML = htmlData
    messageDOM.className = 'message danger'
  }

}