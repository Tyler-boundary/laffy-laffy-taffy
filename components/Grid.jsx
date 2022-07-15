import { CustomClaimViewer } from "./CustomClaimViewer";

const Grid = ({gallery}) => {
  console.log(gallery);
  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
  return (

    <section id="grid" className="pt-10 md:pt-[145px] pb-20 md:pb-[120px] px-4 md:px-10 lg:px-20 max-w-[1960px] mx-auto w-full">
      
      <div className="mx-auto w-full grid gap-x-5 grid-cols-2 lg:grid-cols-3 md:gap-x-5 gap-y-10 lg:gap-x-10">

        {
          
          range(0,120,1).map((item,i) => {
            console.log(`/laffyTaffy/${i}.png`);
            console.log(item);

            if(i != 1 && i != 0) {

              return (
                <CustomClaimViewer filename={`${i}.png`} key={i}/>               
              )

            }
                      

          })

        }

      </div>

    </section>
            
  );
  
};

export default Grid;

