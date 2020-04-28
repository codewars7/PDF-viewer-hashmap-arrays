const alphabetStr = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"

const alphabet = alphabetStr.split(",")
function designerPdfViewer(h, word) {
    // hash map
    let myMap = Object.assign({}, null)
    const hashMap = alphabet.map((item, index) => myMap[item] = h[index])

    // max lenght
    let maxHeight = word.split('').reduce((acc,current) => acc < myMap[current] ? acc = myMap[current] : acc, 0)

    return maxHeight * word.length

}

designerPdfViewer('13131413255555555555555555', 'abc')