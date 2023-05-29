async function main1(input) {
 
    await Promise.all(input.map(async (t) => {
   
      await sleep(t);
   
      console.log('main1', t);
   
    }));
   
  }
   
  async function main2(input) {
   
    for (let i = 0; i < input.length; i += 1) {
   
      await sleep(input[i]);
   
      console.log('main2', input[i]);
   
    }
   
  }

  function sleep(t){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(console.log('sleep'))
        }, t * 1000);
    })
  }
   
  const ex = [1, 2, 3, 4, 5];
//    main1(ex)
//    main2(ex)
  Promise.all([
   
    main1(ex),
   
    main2(ex),
   
  ]).then(() => process.exit(0));