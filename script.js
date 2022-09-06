let btns = document.querySelectorAll('button')

btns.forEach(btn => {
    btn.addEventListener('click' , (event)=>{
        let inp = event.target.parentElement.parentElement.childNodes[1].childNodes[1]
        let val = Number(event.target.parentElement.parentElement.childNodes[1].childNodes[1].value)
        // console.log(val);
        let team = event.target.classList[2]
        // console.log(team)
        let spanTag = event.target.parentElement.parentElement.parentElement.childNodes[3]
        let spanValue = Number(spanTag.innerText.slice(7))
        console.log(spanValue);
        
        switch (team) {
            case 'teamA':
                let ta = document.getElementById('team-a-total')
                ta.value = Number(ta.value) + val
                inp.value = ''
                spanTag.innerText = `Total: ${spanValue + val}`
                break;
            case 'teamB':
                let tb = document.getElementById('team-b-total')
                tb.value = Number(tb.value) + val
                inp.value = ''
                spanTag.innerText = `Total: ${spanValue + val}`

                break;
            case 'teamC':
                let tc = document.getElementById('team-c-total')
                tc.value = Number(tc.value) + val
                inp.value = ''
                spanTag.innerText = `Total: ${spanValue + val}`

                break;
            case 'teamD':
                let td = document.getElementById('team-d-total')
                td.value = Number(td.value) + val
                inp.value = ''
                spanTag.innerText = `Total: ${spanValue + val}`

                break;
        
            default:
                console.log('Error');
                break;
        }
    })
});