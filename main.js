import './style.css'
import './src/index.scss'
import earth from './img/earth2.png';
import mars from './img/mars.png';
import mercury from './img/mercury.png';
import venus from './img/venus.png';


document.querySelector('#app').innerHTML = `
  <div class="wrapper">
    <div class="content">
        <div class="planets">
            <div class="planets__wrapper">
                <div class="planet planet--sun"></div>
                <div class="planet__index planet__index--venus">
                    <div class="planet__rotate">
                        <div class="planet__container planet__container--venus">
                            <div class="planet planet--venus"></div>
                        </div>
                    </div>
                </div>
                <div class="planet__index planet__index--mercury">
                    <div class="planet__rotate">
                        <div class="planet__container planet__container--mercury">
                            <div class="planet planet--mercury"></div>
                        </div>
                    </div>
                </div>
                <div class="planet__index planet__index--earth">
                    <div class="planet__rotate">
                        <div class="planet__container planet__container--earth">
                            <div class="planet planet--earth"></div>
                        </div>
                    </div>
                </div>
                <div class="planet__index planet__index--mars">
                    <div class="planet__rotate">
                        <div class="planet__container planet__container--mars">
                            <div class="planet planet--mars"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`
