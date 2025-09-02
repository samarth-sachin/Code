<--------------------------------->
import numpy as np
import matplotlib.pyplot as plt
x=np.linspace(0,10,50)
y1=np.sin(x)
y2=np.cos(x)
y_scatter=np.random.rand(50)*10
plt.figure(figsize=(8,4))
plt.plot(x,y1,label='sinx',color='blue')
plt.plot(x,y2,label='cosx',color='red',linestyle='--')
plt.title('line plot of sinx and cosx')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.legend()
plt.grid(True)
plt.show()
<--------------------------------->
<--------------------------------->