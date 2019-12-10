import {binding, when} from "cucumber-tsflow";
import {given, then} from "cucumber-tsflow/dist";

@binding()
export class JsonSteps {

  constructor() {
  }

  @given(/I am looking at my screen/)
  public jsonResolver(json: string) {
    //there can even be nothing in the implementation,
    // but what's the point of life, the universe, and everything?
  }

  @when(/I launch this test/)
  public jsonValidator() {
    //how would you test that you ran your test?
  }

  @then(/"hello-world" should be printed/)
  public assertResult() {
    console.log("hello-world");
    //some out-of scope stub/stdio checks
  }
}