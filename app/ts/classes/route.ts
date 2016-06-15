export class ROUTE {
	server_url: string = "http://localhost:8000/api/v1/";
	name: string;
	url: string;
	optional_parameters: Array<string>;
	role: string;
	component_name: string;
	component_path: string;

	constructor(name: string, url: string, required_parameters: Array<string> = null,  optional_parameters:Array<string> = null, role:string = null){

		this.name = name;
		this.url = url;
		this.required_parameters = required_parameters;
		this.optional_parameters = optional_parameters;
		this.role = role;


	}

}