import { expect } from 'chai';
import { binding, given, then, when } from 'cucumber-tsflow';

@binding()
export class Steps {
	private variable: number;

	@given(/a variable set to (\d+)/)
	async givenAVariable(number: number) {
		this.variable = number;
	}

	@when(/I increment the variable by (\d+)/)
	incrementBy(number: number) {
		this.variable += number;
	}

	@then(/the variable should contain (\d+)/)
	variableShouldEqual(number: number) {
		expect(this.variable).to.eql(number);
	}
}
