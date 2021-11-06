class monilenavbar {
    construtor(monilemenu,navlist, navlinks) {
        this.mobilemenu = document.querySelector(this.mobilemenu);
        this.navlist = document.querySelector(navlist);
        this.navlinks = document.querySelectorAll(navlinks)
        this.activeclass = "active";

        this.handleclick = this.handleclick.bind(this);

    }
    animatedlinks(){
        this.navlinks.forEach((links, index) => {
            links.style.animation
            ?(link.style.animation ="")
            : (link.style.animation = `navlinkfade 0.5sease forward $ {
                index / 7 + 0.3
            }s`);

            });
        }
        handleclick() {
            this.navlist.classlist.toggle(this.activeclass);
            this.monilemenu.classlist.toggle(this.activeclass);
            this.animatedlinks();

        }
        addclickevent() {
            this.mobilemenu.addeventlistener("click", this.handleclick);
        }
        init() {
            if (this.mobilemenu ) {
                this.addclickevent();
            }
            return this;
        }
    }
