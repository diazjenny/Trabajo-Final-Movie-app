import React from 'react'
import './style.css'

function Header() {
    return (
        <section class="ant-layout">    
            <header class="ant-layout-header">
                <div class="menu-top">
                    <div class="menu-top__logo">
                        <svg id="Capa_1" x="0px" y="0px" viewBox="0 0 464.041 464.041" style={{'white-space': 'pre'}}><path d="M419.736,133.051c-1.266-7.231-5.732-13.503-12.152-17.064c-5.938-3.65-13.242-4.307-19.736-1.776 c0-0.512,0.152-1,0.152-1.52c0.113-13.139-10.446-23.883-23.586-23.997c-2.924-0.025-5.828,0.489-8.566,1.517 c0-0.512,0.152-1,0.152-1.52c0-13.255-10.745-24-24-24c0-13.255-10.745-24-24-24c-0.52,0-1.008,0.12-1.52,0.152 c2.151-5.487,2.012-11.608-0.384-16.992c-3.442-8.278-11.094-14.045-20-15.072c-7.371-0.634-14.619,2.192-19.616,7.648 c-4.493-12.442-18.221-18.886-30.663-14.394C226.28,5.477,219.945,14.552,220,24.691c0.022-13.233-10.687-23.978-23.919-24.001 c-8.25-0.014-15.927,4.218-20.321,11.201c-5.229-3.061-11.444-3.965-17.328-2.52c-9.182,2.267-16.216,9.654-18.032,18.936 c-1.358,7.404,0.868,15.014,6,20.52c-7.605,0.498-14.516,4.597-18.6,11.032c-5.919-3.468-13.064-4.155-19.536-1.88 c-6.901,2.382-12.352,7.763-14.824,14.632c-2.01,5.515-1.896,11.581,0.32,17.016C83.305,92.419,76.024,101.878,76,112.699 c0,0.52,0.12,1.008,0.152,1.52c-6.476-2.523-13.759-1.875-19.688,1.752c-6.439,3.559-10.921,9.842-12.192,17.088 c-1.462,9.574,2.999,19.084,11.296,24.08L60,160.707h28v31.32h280v-31.336h36l-1.12-1.12 C414.336,156.185,421.533,144.861,419.736,133.051z" style={{fill: 'rgb(253, 182, 47)'}}></path><path d="M112,464.027L42.536,189.675c-4.63-20.053,7.872-40.062,27.925-44.693 c2.751-0.635,5.564-0.956,8.387-0.955H79.2c18.752-0.003,34.585,13.928,36.968,32.528L160,464.027H112z" style={{fill: 'rgb(222, 4, 24)'}}></path><path d="M160,464.027l-42.616-277.992c-2.62-20.413,11.804-39.085,32.217-41.705 c1.576-0.202,3.163-0.304,4.751-0.303h1.328c20.211-0.002,36.74,16.107,37.256,36.312L208,464.027H160z" style={{fill: 'rgb(252, 233, 204)'}}></path><path d="M192.984,182.251L208,464.027h48l13.992-280.8c1.069-20.553-14.725-38.08-35.278-39.15 c-0.638-0.033-1.276-0.05-1.914-0.05h-2.536c-20.58-0.016-37.277,16.655-37.292,37.236 C192.971,181.592,192.976,181.922,192.984,182.251L192.984,182.251z" style={{fill: 'rgb(222, 4, 24)'}}></path><path d="M270.184,179.387L256,464.027h48l41.392-277.064c3.133-20.341-10.817-39.369-31.158-42.502 c-1.878-0.289-3.774-0.434-5.674-0.434h-1.16C287.559,144.027,271.198,159.572,270.184,179.387z" style={{fill: 'rgb(252, 233, 204)'}}></path><path d="M384,144.027c20.58,0,37.264,16.684,37.264,37.264c0,3.122-0.392,6.232-1.168,9.256L352,464.027h-48 l43.136-288.4C349.934,157.435,365.594,144.011,384,144.027z" style={{fill: 'rgb(222, 4, 24)'}}></path><g><path d="M128,264.027h208v96H128V264.027z" style={{fill: 'rgb(253, 182, 47)'}}></path><path d="M72,24.027C72.052,10.817,61.384,0.065,48.174,0.014c-8.86-0.035-17.013,4.831-21.19,12.645 C25.997,12.497,25,12.399,24,12.363c-13.255,0-24,10.745-24,24s10.745,24,24,24c1.116-0.034,2.228-0.146,3.328-0.336 c6.501,11.49,21.086,15.534,32.576,9.033c11.49-6.501,15.534-21.086,9.033-32.576c-0.087-0.153-0.175-0.305-0.265-0.456 C70.828,32.394,71.977,28.252,72,24.027z" style={{fill: 'rgb(253, 182, 47)'}}></path><path d="M464,40.027c0.052-13.211-10.616-23.962-23.826-24.013c-8.86-0.035-17.013,4.831-21.19,12.645 c-0.987-0.162-1.984-0.26-2.984-0.296c-13.255,0-24,10.745-24,24s10.745,24,24,24c1.116-0.034,2.228-0.146,3.328-0.336 c6.501,11.49,21.086,15.534,32.576,9.033s15.534-21.086,9.033-32.576c-0.087-0.153-0.175-0.305-0.265-0.457 C462.828,48.394,463.977,44.252,464,40.027z" style={{fill: 'rgb(253, 182, 47)'}}></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                        </svg>
                    </div>
                    <ul class="ant-menu ant-menu-dark ant-menu-root ant-menu-horizontal" role="menu">
                        <li class="ant-menu-submenu ant-menu-submenu-horizontal ant-menu-overflowed-submenu" role="menuitem" style={{display: 'none'}}>
                            <div class="ant-menu-submenu-title" aria-expanded="false" aria-haspopup="true">
                                <span>···</span>
                                <i class="ant-menu-submenu-arrow"></i>
                            </div>
                        </li>
                        <li class="ant-menu-item ant-menu-item-selected" role="menuitem">
                            <a className="link"  href="/">Home</a>
                        </li>
                        <li class="ant-menu-submenu ant-menu-submenu-horizontal ant-menu-overflowed-submenu" role="menuitem" style={{display: 'none'}}>
                            <div class="ant-menu-submenu-title" aria-expanded="false" aria-haspopup="true">
                                <span>···</span>
                                <i class="ant-menu-submenu-arrow"></i>
                            </div>
                        </li>
                        <li class="ant-menu-item" role="menuitem">
                            <a className="link" href="/upcoming">Ultimos lanzamientos</a>
                        </li>
                        <li class="ant-menu-submenu ant-menu-submenu-horizontal ant-menu-overflowed-submenu" role="menuitem" style={{display: 'none'}}>
                            <div class="ant-menu-submenu-title" aria-expanded="false" aria-haspopup="true">
                                <span>···</span>
                                <i class="ant-menu-submenu-arrow"></i>
                            </div>
                        </li>
                        <li class="ant-menu-item" role="menuitem">
                            <a className="link" href="/popular">Populares</a>
                        </li>
                        <li class="ant-menu-submenu ant-menu-submenu-horizontal ant-menu-overflowed-submenu" role="menuitem" style={{display: 'none'}}>
                            <div class="ant-menu-submenu-title" aria-expanded="false" aria-haspopup="true">
                                <span>···</span>
                                <i class="ant-menu-submenu-arrow"></i>
                            </div>
                        </li>
                        <li class="ant-menu-item" role="menuitem">
                            <a className="link" href="/search"> Buscar</a>
                        </li>
                        <li class="ant-menu-submenu ant-menu-submenu-horizontal ant-menu-overflowed-submenu" role="menuitem" style={{visibility: 'hidden', position: 'absolute', display: 'none'}}>
                            <div class="ant-menu-submenu-title" aria-expanded="false" aria-haspopup="true">
                                <span>···</span>
                                <i class="ant-menu-submenu-arrow"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>            
        </section>
    )
}

export default Header
