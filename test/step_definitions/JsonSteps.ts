import {binding, when} from "cucumber-tsflow";
import {given, then} from "cucumber-tsflow/dist";
import {assert} from "chai";

@binding()
export class JsonSteps {
  private jsonString: string;
  private result: object;

  constructor() {
  }

  @given(/I get a json/)
  public jsonResolver(json: string){
    this.jsonString = json;
  }

  @when(/I try to validate it/)
  public jsonValidator(){
    try{
      this.result = JSON.parse(this.jsonString);
    } catch (e) {
    }
  }

  @then(/result should be a valid potato/)
  public assertResult(){
    assert.isTrue(this.result.hasOwnProperty("weight"));
    assert.isTrue(this.result.hasOwnProperty("id"));
  }
}