export const sumButtonClick = (val) => {
	var newVal = val + 1;
    console.log("You clicked the button" + newVal + "times");
    return {
        type: 'SUM_CLICK',
        payload: newVal
    }
};