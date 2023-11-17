import { useCustomization,sofaColors,cushionColors} from '../contexts/Customization';
const Configurator = () => {

	const {material, setMaterial,soaColor,setSofaColor,cushionColor,setCushionColor} = useCustomization();
	console.log('material', material);

	return <div className="configurator">

		<div className="configurator__section">
        <div className="configurator__section__title">Sofa material</div>
        <div className="configurator__section__values">
        <div className={`item ${material === 'leather' ? "item--active" : ""}`} onClick={() => setMaterial('leather')}>
        <div className="item_label">
        		Leather</div>
        </div>
        <div className={`item ${material === 'design-leather' ? "item--active" : ""}`} onClick={() => setMaterial('design-leather')}>
        <div className="item_label">
        Fabric
        </div>
        </div>
        	</div>
        	</div>

    <div className="configurator__section">
        <div className="configurator__section__title">Sofa Color</div>
        <div className="configurator__section__values">
        {sofaColors.map((item, index) => (

        <div 
        key={index}
        className={`item ${item.color === sofaColors.color ? "item--active" : ""}`} onClick={() => setSofaColor(item)}>
        <div className="item__dot" style={{
            backgroundColor: item.color,

    }}/> 
        <div className="item_label">{item.name}</div>
        </div>
        ))
        
    }
        
            </div>
            </div>

<div className="configurator__section">
        <div className="configurator__section__title">Cushion Color</div>
        <div className="configurator__section__values">
        {cushionColors.map((item, index) => (

        <div 
        key={index}
        className={`item ${item.color === sofaColors.color ? "item--active" : ""}`} onClick={() => setCushionColor(item)}>
        <div className="item__dot" style={{
            backgroundColor: item.color,

    }}/> 
        <div className="item_label">{item.name}</div>
        </div>
        ))
        
    }
        
            </div>
            </div>

</div>
};
export default Configurator;