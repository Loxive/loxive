import Card from './Card'
import sitesJson from './../assets/json/sites.json'

function Linktree() {
    return (<div className='Linktree'>
        {sitesJson.sites.map(site => (
            <Card key={site.id} title={site.title} link={site.link} ></Card>
        ))}
    </div>)
};

export default Linktree;