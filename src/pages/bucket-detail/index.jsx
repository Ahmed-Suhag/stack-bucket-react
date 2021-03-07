import Nav from '../../components/nav';
import Create from '../../components/create';
import Table from '../../components/table';

//   Import Assets
import deleteIcon from '../../assets/icons/delete-icon.png';


function  BucketyDeatilPage(){
    return (
        <div>
            {/* Navigation bar */}
            <Nav />

            {/* main content body */}
            <main className='container __margin--ylg'>
                {/* Create New Add item */}
                <Create extra label='Add New Item'/>

                {/* Item Table */}
				<section className='section table __shadow--sm'>
					<Table />
				</section>
				{/* Item Table Completed */}
				<section className='section table table--success __shadow--sm'>
					<Table />
				</section>

            </main>

        </div>
    )
}
export default BucketyDeatilPage;