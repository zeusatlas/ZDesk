import React, { useState, useEffect } from 'react';

const ThemeSettings = () => {
    // 1. Define Default Configuration
    const initialSettings = {
        skin: 'default',
        theme: 'light', // light, dark, system
        topbarColor: 'light',
        menuColor: 'image',
        sidenavSize: 'default',
        layoutPosition: 'fixed',
        sidebarUser: false
    };

    // 2. Load from localStorage or use defaults
    const [settings, setSettings] = useState(() => {
        const saved = localStorage.getItem('__UBOLD_CONFIG__');
        return saved ? JSON.parse(saved) : initialSettings;
    });

    // 3. Effect to apply changes to the HTML element
    useEffect(() => {
        const root = document.documentElement;

        // Apply Skin
        root.setAttribute('data-skin', settings.skin);
        
        // Apply Theme (Handling System Preference)
        let actualTheme = settings.theme;
        if (settings.theme === 'system') {
            actualTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        root.setAttribute('data-bs-theme', actualTheme);

        // Apply Other Attributes
        root.setAttribute('data-topbar-color', settings.topbarColor);
        root.setAttribute('data-menu-color', settings.menuColor);
        root.setAttribute('data-sidenav-size', settings.sidenavSize);
        root.setAttribute('data-layout-position', settings.layoutPosition);
        
        if (settings.sidebarUser) {
            root.setAttribute('data-sidenav-user', 'true');
        } else {
            root.removeAttribute('data-sidenav-user');
        }

        // Save to localStorage
        localStorage.setItem('__UBOLD_CONFIG__', JSON.stringify(settings));
    }, [settings]);

    // 4. Handle Input Changes
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const resetLayout = () => {
        setSettings(initialSettings);
    };

    return (
        <div className="offcanvas offcanvas-end overflow-hidden" tabIndex={-1} id="theme-settings-offcanvas">
            <div className="d-flex justify-content-between text-bg-primary gap-2 p-3" style={{ backgroundImage: 'url(/assets/images/user-bg-pattern.png)' }}>
                <div>
                    <h5 className="mb-1 fw-bold text-white text-uppercase">UI Customizer</h5>
                    <p className="text-white text-opacity-75 fst-italic fw-medium mb-0">Easily configure layout, styles, and preferences.</p>
                </div>
                <div className="flex-grow-0">
                    <button type="button" className="d-block btn btn-sm bg-white bg-opacity-25 text-white rounded-circle btn-icon" data-bs-dismiss="offcanvas"><i className="ti ti-x fs-lg" /></button>
                </div>
            </div>
            
            <div className="offcanvas-body p-0 h-100" data-simplebar>
                {/* SELECT SKIN */}
                <div className="p-3 border-bottom border-dashed">
                    <h5 className="mb-3 fw-bold">Select Theme (Skin)</h5>
                    <div className="row g-3">
                        {['default', 'material', 'modern', 'saas', 'flat', 'minimal'].map((skin) => (
                            <div className="col-6" key={skin}>
                                <div className="form-check card-radio shadow">
                                    <input 
                                        className="form-check-input" 
                                        type="radio" 
                                        name="skin" 
                                        id={`skin-${skin}`} 
                                        value={skin}
                                        checked={settings.skin === skin}
                                        onChange={handleInputChange} 
                                    />
                                    <label className="form-check-label p-0 w-100" htmlFor={`skin-${skin}`}>
                                        <img src={`/assets/images/layouts/themes/theme-${skin}.png`} alt="layout-img" className="img-fluid" />
                                    </label>
                                </div>
                                <h5 className="text-center text-muted mt-2 mb-0 text-capitalize">{skin}</h5>
                            </div>
                        ))}
                    </div>
                </div>

                {/* COLOR SCHEME */}
                <div className="p-3 border-bottom border-dashed">
                    <h5 className="mb-3 fw-bold">Color Scheme</h5>
                    <div className="row">
                        {['light', 'dark', 'system'].map((t) => (
                            <div className="col-4" key={t}>
                                <div className="form-check card-radio">
                                    <input 
                                        className="form-check-input" 
                                        type="radio" 
                                        name="theme" 
                                        id={`layout-color-${t}`} 
                                        value={t}
                                        checked={settings.theme === t}
                                        onChange={handleInputChange} 
                                    />
                                    <label className="form-check-label p-0 w-100" htmlFor={`layout-color-${t}`}>
                                        <img src={`/assets/images/layouts/${t}.svg`} alt="layout-img" className="img-fluid" />
                                    </label>
                                </div>
                                <h5 className="text-center text-muted mt-2 mb-0 text-capitalize">{t}</h5>
                            </div>
                        ))}
                    </div>
                </div>

                {/* TOPBAR COLOR */}
                <div className="p-3 border-bottom border-dashed">
                    <h5 className="mb-3 fw-bold">Topbar Color</h5>
                    <div className="row g-3">
                        {['light', 'dark', 'gray', 'gradient'].map((c) => (
                            <div className="col-4" key={c}>
                                <div className="form-check card-radio">
                                    <input 
                                        className="form-check-input" 
                                        type="radio" 
                                        name="topbarColor" 
                                        id={`topbar-color-${c}`} 
                                        value={c}
                                        checked={settings.topbarColor === c}
                                        onChange={handleInputChange} 
                                    />
                                    <label className="form-check-label p-0 w-100" htmlFor={`topbar-color-${c}`}>
                                        <img src={`/assets/images/layouts/topbar-${c}.svg`} alt="layout-img" className="img-fluid" />
                                    </label>
                                </div>
                                <h5 className="text-center text-muted mt-2 mb-0 text-capitalize">{c}</h5>
                            </div>
                        ))}
                    </div>
                </div>

                {/* MENU COLOR */}
                <div className="p-3 border-bottom border-dashed">
                    <h5 className="mb-3 fw-bold">Sidenav Color</h5>
                    <div className="row g-3">
                        {['light', 'dark', 'side-gray', 'side-gradient', 'image'].map((m) => (
                            <div className="col-4" key={m}>
                                <div className="form-check card-radio">
                                    <input 
                                        className="form-check-input" 
                                        type="radio" 
                                        name="menuColor" 
                                        id={`sidenav-color-${m}`} 
                                        value={m}
                                        checked={settings.menuColor === m}
                                        onChange={handleInputChange} 
                                    />
                                    <label className="form-check-label p-0 w-100" htmlFor={`sidenav-color-${m}`}>
                                        <img src={`/assets/images/layouts/${m === 'image' ? 'side-image' : m}.svg`} alt="layout-img" className="img-fluid" />
                                    </label>
                                </div>
                                <h5 className="text-center text-muted mt-2 mb-0 text-capitalize">{m}</h5>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SIDEBAR SIZE */}
                <div className="p-3 border-bottom border-dashed">
                    <h5 className="mb-3 fw-bold">Sidebar Size</h5>
                    <div className="row g-3">
                        {[
                            { val: 'default', label: 'Default', img: 'light' },
                            { val: 'compact', label: 'Compact', img: 'sidebar-compact' },
                            { val: 'condensed', label: 'Condensed', img: 'sidebar-sm' },
                            { val: 'on-hover', label: 'Hover', img: 'sidebar-sm' },
                            { val: 'offcanvas', label: 'Offcanvas', img: 'sidebar-full' },
                            { val: 'on-hover-active', label: 'On Hover', img: 'light' },
                        ].map((s) => (
                            <div className="col-4" key={s.val}>
                                <div className="form-check card-radio">
                                    <input 
                                        className="form-check-input" 
                                        type="radio" 
                                        name="sidenavSize" 
                                        id={`sidenav-size-${s.val}`} 
                                        value={s.val}
                                        checked={settings.sidenavSize === s.val}
                                        onChange={handleInputChange} 
                                    />
                                    <label className="form-check-label p-0 w-100" htmlFor={`sidenav-size-${s.val}`}>
                                        <img src={`/assets/images/layouts/${s.img}.svg`} alt="layout-img" className="img-fluid" />
                                    </label>
                                </div>
                                <h5 className="text-center text-muted mt-2 mb-0">{s.label}</h5>
                            </div>
                        ))}
                    </div>
                </div>

                {/* LAYOUT POSITION */}
                <div className="p-3 border-bottom border-dashed">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="fw-bold mb-0">Layout Position</h5>
                        <div className="btn-group radio" role="group">
                            <input 
                                type="radio" className="btn-check" name="layoutPosition" id="layout-position-fixed" value="fixed" 
                                checked={settings.layoutPosition === 'fixed'} onChange={handleInputChange}
                            />
                            <label className="btn btn-sm btn-soft-warning w-sm" htmlFor="layout-position-fixed">Fixed</label>
                            
                            <input 
                                type="radio" className="btn-check" name="layoutPosition" id="layout-position-scrollable" value="scrollable" 
                                checked={settings.layoutPosition === 'scrollable'} onChange={handleInputChange}
                            />
                            <label className="btn btn-sm btn-soft-warning w-sm ms-0" htmlFor="layout-position-scrollable">Scrollable</label>
                        </div>
                    </div>
                </div>

                {/* SIDEBAR USER */}
                <div className="p-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0"><label className="fw-bold m-0" htmlFor="sidebaruser-check">Sidebar User Info</label></h5>
                        <div className="form-check form-switch fs-lg">
                            <input 
                                type="checkbox" className="form-check-input" name="sidebarUser" id="sidebaruser-check" 
                                checked={settings.sidebarUser} onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="offcanvas-footer border-top p-3 text-center">
                <div className="row">
                    <div className="col-12">
                        <button type="button" className="btn btn-danger bg-gradient fw-semibold py-2 w-100" onClick={resetLayout}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemeSettings;