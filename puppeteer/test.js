const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-efedfbfecaddebfebaaabdaccdcfbbafadbadfbba.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
      await page.click('#signupLink');
      await page.waitForNavigation();
      await page.type('#email', 'test@gmail.com');
      await page.type('#username', 'testuser');
      await page.type('#mobileNumber', '9876543210');
      await page.type('#password', 'Test@123');
      await page.type('#confirmPassword', 'Test@123');
      await page.click('#submitButton');
      await page.waitForNavigation();
      await page.waitForSelector('#loginButton',{timeout:3000});
      console.log('TESTCASE:FE_Signup:success');
    }
     catch(e){
      console.log('TESTCASE:FE_Signup:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

 

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-efedfbfecaddebfebaaabdaccdcfbbafadbadfbba.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
      await page.type('#email', 'test@gmail.com');
      await page.type('#password', 'Test@123');
      await page.click('#loginButton');
      await page.waitForNavigation();
      await page.waitForSelector('#logout',{timeout:3000});
      console.log('TESTCASE:FE_Login:success');
    }
     catch(e){
      console.log('TESTCASE:FE_Login:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

 

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-efedfbfecaddebfebaaabdaccdcfbbafadbadfbba.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.type('#email', 'test@gmail.com');
    await page.type('#password', 'Test@123');
    await page.click('#loginButton');
      await page.waitForNavigation();
      await page.waitForSelector('#logout',{timeout:3000});
      await page.click('#userInstitute');
      await page.waitForSelector('#userInstituteGrid1',{timeout:3000});
      await page.click('#userInstituteGrid1');
      await page.waitForSelector('#userCourseGrid1',{timeout:3000});
      console.log('TESTCASE:FE_UserInstituteOperation:success');
    }
     catch(e){
      console.log('TESTCASE:FE_UserInstituteOperation:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
  await page.goto('https://8081-efedfbfecaddebfebaaabdaccdcfbbafadbadfbba.examlyiopb.examly.io/');
  await page.setViewport({
    width:1200,
    height:800,
  })
  await page.type('#email', 'test@gmail.com');
  await page.type('#password', 'Test@123');
  await page.click('#loginButton');
    await page.waitForNavigation();
    await page.waitForSelector('#logout',{timeout:3000});
    await page.click('#userEnrolledCourse');
    await page.waitForSelector('#enrolledCourse',{timeout:3000});
    await page.click('#logout');
    await page.waitForSelector('#loginButton',{timeout:3000});
    console.log('TESTCASE:FE_UserEnrolledCourseOperation:success');
  }
   catch(e){
    console.log('TESTCASE:FE_UserEnrolledCourseOperation:failure');
  }finally{
    await page.close();
    await browser.close();
  }
  
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
  await page.goto('https://8081-efedfbfecaddebfebaaabdaccdcfbbafadbadfbba.examlyiopb.examly.io/');
  await page.setViewport({
    width:1200,
    height:800,
  })
    await page.type('#email', 'admin@gmail.com');
    await page.type('#password', 'Admin@123');
    await page.click('#loginButton');
    await page.waitForNavigation();
    await page.waitForSelector('#logout',{timeout:3000});
    await page.click('#adminInstitute');
    await page.waitForSelector('#adminInstituteGrid1',{timeout:3000});
    await page.click('#adminCourse');
    await page.waitForSelector('#courseGrid1',{timeout:3000});
    console.log('TESTCASE:FE_AdminInstituteCourseOperation:success');
  }
   catch(e){
    console.log('TESTCASE:FE_AdminInstituteCourseOperation:failure');
  }finally{
    await page.close();
    await browser.close();
  }
  
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
  await page.goto('https://8081-efedfbfecaddebfebaaabdaccdcfbbafadbadfbba.examlyiopb.examly.io/');
  await page.setViewport({
    width:1200,
    height:800,
  })
    await page.type('#email', 'admin@gmail.com');
    await page.type('#password', 'Admin@123');
    await page.click('#loginButton');
    await page.waitForNavigation();
    await page.waitForSelector('#logout',{timeout:3000});
    await page.click('#adminStudents');
    await page.waitForSelector('#addStudent',{timeout:3000});
    await page.click('#logout');
    await page.waitForSelector('#loginButton',{timeout:3000});
    console.log('TESTCASE:FE_AdminStudentsOperation:success');
  }
   catch(e){
    console.log('TESTCASE:FE_AdminStudentsOperation:failure');
  }finally{
    await page.close();
    await browser.close();
  }
  
})();