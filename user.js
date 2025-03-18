const BASE_URL = 'http://localhost:8000'
window.onload = async () => {
    await loadData()
}

const loadData = async () => {
    console.log('users page loaded');
    //1.load user ทั้งหมด จาก api ที่เตรียม
    const response = await axios.get(`${BASE_URL}/users`)
    console.log(response.data)

    const userDOM = document.getElementById('users')
    //2.นำ user ทั้งหมด โหลดกลับเข้าไปhtml

    let htmlData = `
    <table border="1">
        <thead>
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Interests</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
        </thead>
        <tbody>
    `;

    
    for(let i = 0; i < response.data.length; i++) {
      let users = response.data[i]
      htmlData += `
        <tr>
          <td>${users.id}</td>
          <td>${users.firstname}</td>
          <td>${users.lastname}</td>
          <td>${users.age}</td>
          <td>${users.gender}</td>
          <td>${users.interests || '-'}</td>
          <td>${users.description || '-'}</td>
            <td>
                <a href='index.html?id=${users.id}'><button>Edit</button></a>
                <button class='delete' data-id='${users.id}'>Delete</button>
            </td>
        </tr>
        `
    }
    htmlData += '</div>'
    userDOM.innerHTML = htmlData

    //3. ลบ user
    const deleteDOMs = document.getElementsByClassName('delete')
    for (let i = 0; i < deleteDOMs.length; i++) {
        deleteDOMs[i].addEventListener('click', async (event) => {
            //ดึก id ของ user ที่ต้องการลบ
            const id = event.target.dataset.id
            try{
                await axios.delete(`${BASE_URL}/users/${id}`)
                loadData() //recursive function = เรียกใช้ฟังก์ชัน ตัวเอง
            }catch (error) {
                console.log('error',error)
            }
        })
        document.getElementById("backButton").addEventListener("click", function() {
            window.location.href = "index.html";
        });        
    }
}
