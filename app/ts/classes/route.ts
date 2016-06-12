export class ROUTE {
	server_url: string = "http://localhost:8000/api/v1/";
	name: string;
	url: string;
	optional_parameters: Array<string>;
	role: string;
	component_name: string;
	component_path: string;

	constructor(name: string, url: string, optional: Array<string> = null,role:string = null){
		
		this.name = name;
		this.url = url;
		this.optional_parameters = optional;
		this.role = role;

	}

}