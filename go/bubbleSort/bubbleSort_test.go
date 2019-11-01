package bubbleSort

import (
	"testing"
	"reflect"
)

func TestCase1(t *testing.T) {
	test1:=[]int{5,3,1,2,4}
	expected:=[]int{1,2,3,4,5}
	output:=BubbleSort(test1)
	if !reflect.DeepEqual(output, expected){
		t.Errorf("BubbleSort output not correct")
	}
}