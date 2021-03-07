import Nav from '../../components/nav';
import Create from '../../components/create';
import Table from '../../components/table';
// Import Assets

import plusIcon from '../../assets/icons/plus-icon.png'


function BucketPage (){
     return (
        <div>
             {/* Navigation bar */}
            <Nav />

            {/* ---main content--- */}
            <main className='container __margin--ylg'>
                 {/* Add new bucket */}
				

				 <div className='section add-item_shadow--sm'>
                     <Create extra label='Add New Item'/>
				 </div>


				{/* Buckets Table */}
				<div className='section table __shadow--sm'>
				    <Table />
				</div>
            </main>




        </div>
     );
}

export default BucketPage