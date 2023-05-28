
// module.exports = (app) => {

//     const fs = require('fs');
//     const filePath = 'src/database/arquivo.json';

//     app.post('/data', (req, res) => {
//     if (fs.existsSync(filePath)) {
//         const rawData = fs.readFileSync(filePath);
//         const jsonData = JSON.parse(rawData);
//         jsonData.push(req.body);
//         fs.writeFileSync(filePath, JSON.stringify(jsonData));
//     } else {
//         const jsonData = [req.body];
//         fs.writeFileSync(filePath, JSON.stringify(jsonData));
//     }
//     res.send('Data saved successfully');
//     });

















// function enviarJson(novoProduto){
   
//     try {
//         const fs = require('fs');
//         const data = fs.readFileSync('src/database/arquivo.json', 'utf8');
//         const produtos = JSON.parse(data);
//         produtos.push(novoProduto);
//         const json = JSON.stringify(produtos);
//         fs.writeFileSync('src/database/arquivo.json', 'utf8');
//         return true;
//     } catch (error) {
//         console.log(error);
//         return false;
//     }
// }


      
    

// module.exports = {enviarJson}