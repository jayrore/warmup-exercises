package findThreeLargestNumbers
import (
	"testing"
	"reflect"
)

func TestCase1(t *testing.T) {
	test1 := [] int { 4, 1, 2, 3 }
	expected := [] int { 2, 3, 4 }

	output := FindThreeLargestNumbers(test1)
	if !reflect.DeepEqual(output, expected) {
		t.Errorf("Assert is incorrect, got:")
		// t.Fail()
	}
}