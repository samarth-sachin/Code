
package java.interferance.interferance;

import coding.oops.interferance.engine;


public  class car implements  engine, brake, media{
    
    @Override
    void brake()
    {
        System.out.println("engine is very good ");
    }
    @Override
    void start()
    {
        System.out.println("start is very smooth");
    }

    @Override
    public void stop() {
        throw new UnsupportedOperationException("Not supported yet.");
    }

}
