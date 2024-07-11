const textEl=document.querySelector('#data');
const sizeEl=document.querySelector('#size');
const logoEl=document.querySelector('#logo');
const clearEl=document.querySelector('#clear');
const marginEl=document.querySelector('#margin');
const dotModeEl=document.querySelector('#dot');
const dotColorEl1=document.querySelector('#dot-color-1');
const dotColorEl2=document.querySelector('#dot-color-2');
const bgEl=document.querySelector('#bg-color');
const dlEl=document.querySelector('#btn-dl');
let op={
    width:100,
    height:100,
    type:"png",
    data: textEl.value,
     //image:"https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    // image:"https://edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-white-f.png",
    image:"data:image/png;base64,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",
    dotsOptions:{
        color:"#4267b2",
        type:"rounded",
        gradient:
        {
            "type":"linear",
            "colorStops":[
                {
                    "offset":0,
                    "color":"#000000"
                },
                {
                    "offset":1,
                    "color":"#000"
                }
            ]
        }
    },
    backgroundOptions:
    {
        color:"#fff",

    }

};
render();
sizeEl.addEventListener('input',e=>{
    op.width=e.target.value *10;
    op.height=e.target.value*10;
    render();
});
textEl.addEventListener('keyup',e=>
{
    op.data=e.target.value;
    render();
});
marginEl.addEventListener('input',e=>{
    op.imageOptions={margin:e.target.value};
    render();
});
dotModeEl.addEventListener('change',e=>{
    op.dotsOptions.type=e.target.value;
    render();
});
dotColorEl1.addEventListener('input',e=>{
    op.dotsOptions.gradient.colorStops[0].color=e.target.value;
    render();
});
dotColorEl2.addEventListener('input',e=>{
    op.dotsOptions.gradient.colorStops[1].color=e.target.value;
    render();
});
bgEl.addEventListener('input',e=>{
    op.backgroundOptions.color=e.target.value;
    render();
});
var qrCode;
function render()
{
    qrCode=new QRCodeStyling(op);
    let canvasEl=document.querySelector('#canvas');
    canvasEl.innerHTML='';
    qrCode.append(canvasEl);
    canvasEl.nextElementSibling.innerHTML=`${op.width}px x ${op.height}px`;
}

function browse(){
    logoEl.click();
}
logoEl.addEventListener('change',e=>{
    let file=e.target.files[0];
    let reader=new FileReader();
    reader.onload= ()=>{
        op.image=reader.result;
        render();
    };
    render.readAsDataURL(file);
})

clearEl.addEventListener('click',e=>{
    delete op.image;
    render();
});

dlEl.addEventListener('click',e=>{
    qrCode.download({name:'qr',extension:'svg'});
})
