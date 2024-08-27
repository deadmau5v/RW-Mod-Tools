export namespace main {
	
	export class ConfigType {
	    title: string;
	    rw_dir: string;
	    api_host: string;
	
	    static createFrom(source: any = {}) {
	        return new ConfigType(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.title = source["title"];
	        this.rw_dir = source["rw_dir"];
	        this.api_host = source["api_host"];
	    }
	}
	export class FileInfo {
	    name: string;
	    is_dir: boolean;
	    path: string;
	
	    static createFrom(source: any = {}) {
	        return new FileInfo(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.is_dir = source["is_dir"];
	        this.path = source["path"];
	    }
	}

}

