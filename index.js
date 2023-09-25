// code your solution here
function saturdayFun(activity = 'roller-skate')
{
    return 'this Saturday, I want to ${activity}!';

}
function mondayWork(work = 'go to thr office')
{
    return 'This is Monday,I will ${work}.';

}
function WrapAdjective(wrap = '*')
{
    return function(result = 'a hard worker'){
        return 'You are ${wrap}${result}${wrap}!';

    };
}