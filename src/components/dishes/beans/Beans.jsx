import './Beans.scss';

 const Beans = () => {
  return (
    <div className='beansCat'>
    <h4>Beans</h4>
    <div className='beanCatDet'>
      <img src={require('../../../assets/beanM.webp')} alt='beans'/>
      <p>
      Rice is a staple food in Nigeria, and it plays a significant
        role in the country's diet and economy. Nigeria is one of the
        largest consumers of rice in Africa, and well known for their
        various recipes of rice. Expand to view.
      </p>
    </div>
    <details>
      <summary>
        View Recipes
      </summary>
      <div className='dishes'>
        <div>
          <div className='imgDiv'>
            <img src={require('../../../assets/pbeans.jpeg')} class="visit-img" alt='ogbonor soup' />
          </div>
          <h5>
            Porridge Beans
          </h5>
          <p>
            This is a popular Nigerian dish which can be taken with protein(goat meat, chicken, beef, turkey, ram, boiled egg),
            coleslaw, salad etc.
          </p>
          <div className='buttonDiv'>
            <button>Order Now</button>
            <button>Buy Recipe</button>
          </div>
        </div>
        <div>
          <div className='imgDiv'>
            <img src={require('../../../assets/beansyam.jpeg')} class="visit-img" alt='ogbonor soup' />
          </div>
          <h4>
            Porridge Beans/Yam
          </h4>
          <p>
          This is a popular Nigerian dish which can be taken with protein(goat meat, chicken, beef, turkey, ram, boiled egg),
            coleslaw, salad etc.
          </p>
          <div className='buttonDiv'>
            <button>Order Now</button>
            <button>Buy Recipe</button>
          </div>
        </div>
        <div>
          <div className='imgDiv'>
            <img src={require('../../../assets/beanPl.jpeg')} class="visit-img" alt='ogbonor soup' />
          </div>
          <h4>
          Porridge Beans/Plantain
          </h4>
          <p>
          This is a popular Nigerian dish which can be taken with protein(goat meat, chicken, beef, turkey, ram, boiled egg),
            coleslaw, salad etc.
          </p>
          <div className='buttonDiv'>
            <button>Order Now</button>
            <button>Buy Recipe</button>
          </div>
        </div>
        <div>
          <div className='imgDiv'>
            <img src={require('../../../assets/akara.jpeg')} class="visit-img" alt='ogbonor soup' />
          </div>
          <h4>
            Akara (Bean Cake)
          </h4>
          <p>
          This is a popular Nigerian dish which can be taken with protein(goat meat, chicken, beef, turkey, ram, boiled egg),
            coleslaw, salad etc.
          </p>
          <div className='buttonDiv'>
            <button>Order Now</button>
            <button>Buy Recipe</button>
          </div>
        </div>
        <div>
          <div className='imgDiv'>
            <img src={require('../../../assets/moi.webp')} class="visit-img" alt='ogbonor soup' />
          </div>
          <h4>
            Moi Moi
          </h4>
          <p>
          This is a popular Nigerian dish which can be taken with protein(goat meat, chicken, beef, turkey, ram, boiled egg),
            coleslaw, salad etc.
          </p>
          <div className='buttonDiv'>
            <button>Order Now</button>
            <button>Buy Recipe</button>
          </div>
        </div>
        <div>
          <div className='imgDiv'>
            <img src={require('../../../assets/riceBStew.jpeg')} class="visit-img" alt='ogbonor soup' />
          </div>
          <h4>
            White Rice/Beans and Stew
          </h4>
          <p>
          This is a popular Nigerian dish which can be taken with protein(goat meat, chicken, beef, turkey, ram, boiled egg),
            coleslaw, salad etc.
          </p>
          <div className='buttonDiv'>
            <button>Order Now</button>
            <button>Buy Recipe</button>
          </div>
        </div>
        <div>
          <div className='imgDiv'>
            <img src={require('../../../assets/riceB.jpeg')} class="visit-img" alt='ogbonor soup' />
          </div>
          <h4>
            Rice and Beans
          </h4>
          <p>
          This is a popular Nigerian dish which can be taken with protein(goat meat, chicken, beef, turkey, ram, boiled egg),
            coleslaw, salad etc.
          </p>
          <div className='buttonDiv'>
            <button>Order Now</button>
            <button>Buy Recipe</button>
          </div>
        </div>
      </div>
    </details>
  </div>
  );
 }

 export default Beans;