
const getCroppedImageUrl =( url :string) =>{
    const target ='media/';
    const index = url.indexOf(target) + target.length ;
    return url.slice(343,index) + 'crop/600/405' + url.slice(index);
}
export default getCroppedImageUrl ; 