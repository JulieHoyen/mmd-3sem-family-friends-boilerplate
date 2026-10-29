      
  
     const temperament = "Independent, dignified, aloof, loyal, confident";
const traits = temperament.split(",").map((trait) => trait.trim());



const TraitBadge = ({ temperament }) => {

  const traits = temperament 
  ? temperament.split(",").map((trait) => trait.trim())
: [];

const colors = [
    "bg-sky-200 text-sky-600",
    "bg-rose-200 text-rose-500",
    "bg-lime-300 text-lime-700",
    "bg-amber-200 text-yellow-600",
    "bg-indigo-200 text-indigo-600",
  ];


return (

  <div className="flex flex-wrap gap-3">
{traits.map((trait, index) => (
  <figure 
  key={`${trait}-${index}`}
className={`rounded-full px-3 py-2 ${colors[index % colors.length]} `}
>
<p className="text-sm font-light">
  {trait}
</p>

</figure>
))}



  </div>
);

};



      export default TraitBadge;
      
      
      
      
 