import PropertyAmenities from './PropertyAmenities';
import PropertyForm from './PropertyForm';
import PropertyGrid from './PropertyGrid';
import PropertyMain from './PropertyMain';
import PropertyMap from './PropertyMap';
import PropertyRelated from './PropertyRelated';

const Property = () => {
	return (
		<section className='bg-[#f8f8f8]'>
			<PropertyGrid />
			<div className='section-paddings'>
				<div className='container'>
					<div className='flex xl:flex-row flex-col md:gap-9 gap-6'>
						<div className='flex-[0_0_64.7%]'>
							<div className='flex flex-col xl:gap-11 md:gap-9 gap-6 text-[#3d3d3d]'>
								<PropertyMain />
								<PropertyAmenities />
								<PropertyMap />
							</div>
						</div>
						<div className='flex-[0_1_35.3%]'>
							<div className='flex flex-col xl:gap-11 md:gap-9 gap-6'>
								<PropertyForm />
								<PropertyRelated />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Property;
