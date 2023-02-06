import { content } from '../contentMenu.js'
// creating li elements & adding classes
const listNode = () => {
    let ulNode = []
   
    for(let i = 1; i < 5; i++){
        let li = document.createElement('li')
        let a = document.createElement('a')
        
        if(i === 1){ 
            li.classList = 'menu-item'
            a.innerText = content.value1
            a.href = '#menu'
        }
        if(i === 2){
            li.classList = 'contact-item'
            a.innerText = content.value2
            a.href = '#contact'
        }   
        if(i === 3){
            li.classList = 'branch-of-item'
            a.innerText = content.value3
            a.href = '#branch-of'
        } 
        if(i === 4){
            li.classList = 'social-ntw'
            a.innerText = content.value4
            a.href = '#social-ntws'
        } 
        li.classList.add('li-under', 'li-h')
        li.append(a)
        // adding backbtn event
        a.addEventListener('click', async () => {
            const { back } = await import('./backBtn.js')
            return back()
        })

        // getting the elements in array
        ulNode.push(li)
    }
    return ulNode
}
// 
export const newList = listNode()