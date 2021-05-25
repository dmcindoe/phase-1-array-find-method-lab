function superbowlWin(record){
    function hasWin(element){
        return (element.result === `W`)
    }
        let superbowlWin = record.find(hasWin)
            console.log(superbowlWin);

        if(typeof superbowlWin === "object"){
            return superbowlWin.year
        }else {
            return undefined
        }
    }
