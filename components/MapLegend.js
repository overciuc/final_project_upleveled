import L from 'leaflet';
import { useEffect } from 'react';

function MapLegend({ map }) {
  useEffect(() => {
    if (map) {
      const legend = L.control({ position: 'bottomleft' });

      legend.onAdd = () => {
        const div = L.DomUtil.create('div', 'info legend');
        div.innerHTML = `<div style="width: 520px; border-radius: 10px; background-color: rgba(255, 255, 255, 0.7); justify-content: center;">
                <table style="margin: auto; padding-bottom: 10px; ">
                  <tbody>
                    <tr>
                      <th colSpan="12">
                        <h4>Color legend</h4>
                      </th>
                    </tr>
                    <tr>
                      <td style="width: 40px;
                      height: 20px;
                      background-color: #ff0000;
                      "/>
                      <td style="width: 40px;
                      height: 20px;
                      background-color: #fc3800;
                      "/>
                      <td style="width: 40px;
                      height: 20px;
                      background-color: #f86f00;"/>
                      <td style="width: 40px;
                      height: 20px;
                      background-color: #f5a500;"/>
                      <td style="width: 40px;
                      height: 20px;
                      background-color: #f2d900;"/>
                      <td style="width: 40px;
                      height: 20px;
                      background-color: #d1ee00;"/>
                      <td style="width: 40px;
                      height: 20px;
                      background-color: #9aeb00;"/>
                      <td style="width: 40px;
                      height: 20px;
                      background-color: #64e800;"/>
                      <td style="width: 40px;
                      height: 20px;
                      background-color: #2fe400;"/>
                      <td style="width: 40px;
                      height: 20px;
                      background-color: #04db08;"/>
                      <td style="width: 40px;
                      height: 20px;"/>
                      <td style="width: 40px; height: 20px;
                      background-color: rgb(51, 136, 255);"/>

                    </tr>
                    <tr style="margin-bottom: 10px;">
                      <th style="width: 40px;
                      height: 20px;
                      ">1</th>
                      <th style="width: 40px;
                      height: 20px;
                      ">2</th>
                      <th style="width: 40px;
                      height: 20px;
                      ">3</th>
                      <th style="width: 40px;
                      height: 20px;
                      ">4</th>
                      <th style="width: 40px;
                      height: 20px;
                      ">5</th>
                      <th style="width: 40px;
                      height: 20px;
                      ">6</th>
                      <th style="width: 40px;
                      height: 20px;
                      ">7</th>
                      <th style="width: 40px;
                      height: 20px;
                      ">8</th>
                      <th style="width: 40px;
                      height: 20px;
                      ">9</th>
                      <th style="width: 40px;
                      height: 20px;
                      ">10</th>
                      <th style="width: 40px;
                      height: 20px;
                      "/>
                      <th style="width: 40px;
                      height: 20px;
                      ">district outline</th>
                    </tr>
                  </tbody>
                </table>
              </div>`;
        return div;
      };

      legend.addTo(map);
    }
  }, [map]);
  return null;
}

export default MapLegend;
