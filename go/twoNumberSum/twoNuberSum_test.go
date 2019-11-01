package twoNumberSum
import (
	"testing"
	"reflect"
)

func TestCase1(t *testing.T) {
	test1 := []int {5,3,0,-1,4,6}
	output := TwoNumberSum(test1, 8)
	expected := []int{3,5}

	if !reflect.DeepEqual(output, expected) {
		t.Errorf("Two number sum is incorrect")
	}

}